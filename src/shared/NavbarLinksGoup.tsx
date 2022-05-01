import React, { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles } from '@mantine/core';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { CgLoadbarDoc } from 'react-icons/cg';
import { IconType } from 'react-icons';
import { TableOfContentsFloating } from './TableOfContents';
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 700,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    paddingLeft: 26,
    paddingTop: 20,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.lg,
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `6px ${theme.spacing.lg}px`,
    paddingLeft: 41,
    fontSize: theme.fontSizes.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  active: {
    color: theme.colorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[6],
    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.colors.blue[5] : theme.colors.blue[8],
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

interface LinksGroupProps {
  icon: IconType;
  label: string;
  initiallyOpened?: boolean;
  prefix: string;
  links?: { 
    label: string; 
    link: string; 
    steps?: { 
      label: string, 
      link: string, 
      order: number 
    }[] 
  }[];
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, prefix }: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === 'ltr' ? BiChevronRight : BiChevronLeft;
  const router = useRouter();
  const items = (hasLinks ? links : []).map((link) => (
    <div key={link.label}>
      <Text<'a'>
        component="a"
        className={`${classes.link} ${(router.asPath.includes(link.link) ? classes.active : null)}`}
        href={"/docs/" + prefix + "/" + link.link}
      >
        {link.label}
      </Text>
    </div>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={24}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}