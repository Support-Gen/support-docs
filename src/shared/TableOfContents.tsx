import React, { useState } from 'react';
import { createStyles, Box, Text, Group, Title } from '@mantine/core';
import { CgPlayListSearch } from 'react-icons/cg';

const LINK_HEIGHT = 38;
const INDICATOR_SIZE = 10;
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2;

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    lineHeight: `${LINK_HEIGHT}px`,
    fontSize: theme.fontSizes.sm,
    height: LINK_HEIGHT,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[6],
    },
  },

  linkActive: {
    fontWeight: 500,
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
  },

  links: {
    position: 'relative',
  },

  indicator: {
    transition: 'transform 150ms ease',
    border: `2px solid ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7]}`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    height: INDICATOR_SIZE,
    width: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE,
    position: 'absolute',
    left: -INDICATOR_SIZE / 2 + 1,
  },
}));

interface TableOfContentsFloatingProps {
  activeIndex: number, 
  links: { label: string; link: string; order: number }[];
}

export function TableOfContentsFloating({ activeIndex, links }: TableOfContentsFloatingProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(activeIndex);
  

  const items = links.map((item, index) => (
    <Box<'a'>
      component="a"
      href={item.link}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      sx={(theme) => ({ paddingLeft: item.order * theme.spacing.lg })}
    >
      {item.label}
    </Box>
  ));

  return (
    <div>
      <Title order={2} mb={'xl'}>On this page</Title>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{ transform: `translateY(${active * LINK_HEIGHT + INDICATOR_OFFSET}px)` }}
        />
        {items}
      </div>
    </div>
  );
}