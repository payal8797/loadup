import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Avatar,
    Badge,
    Text,
} from '@chakra-ui/react';

const getStatusBadge = (status: string) => {
    return (
        <Badge className={status === 'Online' ? 'online tag' : 'offline tag'}>
            {status}
        </Badge>
    );
};

type AuthorsDataProps = {
    name: string;
    email: string;
    role: string;
    department: string;
    status: string;
    date: string;
    avatar: string;
};

type AuthorsProps = {
    authors: AuthorsDataProps[];
};

const AuthorsTable = ({ authors }: AuthorsProps) => {
    return (
        <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
                Authors Table
            </Text>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Author</Th>
                        <Th>Function</Th>
                        <Th>Status</Th>
                        <Th>Employed</Th>
                        <Th>Edit</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {authors.map((author, index) => (
                        <Tr key={index}>
                            <Td display="flex" alignItems="center" gap={3}>
                                <Avatar
                                    size="sm"
                                    name={author.name}
                                    src={author.avatar}
                                />
                                <Box>
                                    <Text fontWeight="bold">{author.name}</Text>
                                    <Text fontSize="sm" className="grey">
                                        {author.email}
                                    </Text>
                                </Box>
                            </Td>
                            <Td>
                                <Text fontWeight="bold">{author.role}</Text>
                                <Text fontSize="sm" className="grey">
                                    {author.department}
                                </Text>
                            </Td>
                            <Td>{getStatusBadge(author.status)}</Td>
                            <Td>{author.date}</Td>
                            <Td cursor="pointer">Edit</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default AuthorsTable;
