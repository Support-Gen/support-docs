import { Anchor, Autocomplete, Box, Group } from "@mantine/core";
import {IoSearch} from 'react-icons/io5'

const Navigation = ({ hasSearch } : { hasSearch?: boolean } ) => {
    return (
        <Box component="nav" style={{ paddingBlock: 15, width: '100%' }}>
            <Group direction="row" position="apart">
                <Group direction="row">
                    <Anchor href="/" variant={'text'} weight={'bold'} style={{marginRight: 100}}>Product Guide</Anchor>
                    {
                        (hasSearch ? 
                            <Autocomplete
                                variant={"unstyled"}
                                style={{ width: 400 }}
                                size='md'
                                icon={ <IoSearch></IoSearch> }
                                placeholder="Type your issue here..."
                                data={['How to setup an account?', 'How to create a new object?']}
                            />
                            : ''
                        )
                    }
                </Group>
                <Group direction="row">
                    <Anchor variant={'text'}>Home</Anchor>
                </Group>
            </Group>
        </Box>
    );
};

export default Navigation;