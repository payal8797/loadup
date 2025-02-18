import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    AvatarGroup,
    Avatar,
    Text,
    Icon,
    Flex,
    Divider,
} from '@chakra-ui/react';
import { JSX } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

type ProjectsProps = {
    id: number;
    company: string;
    logo: JSX.Element;
    members: string[];
    budget: string;
    completion: number;
};

type ProjectsTableProps = {
    projects: ProjectsProps[];
};

const ProjectsTable = ({ projects }: ProjectsTableProps) => {
    return (
        <Box className="tableContainer">
            <Flex className="header">
                <Text className="headerTitle bold">Projects</Text>
                <Flex className="doneProjects">
                    <Icon as={FaCheckCircle} mr={1} />
                    <Text className="fontSize-14">30 done this month</Text>{' '}
                </Flex>
            </Flex>

            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Companies</Th>
                        <Th>Members</Th>
                        <Th>Budget</Th>
                        <Th>Completion</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {projects.map((project) => (
                        <Tr key={project.id}>
                            <Td className="companyCell">
                                <Flex align="center" gap={2}>
                                    {project.logo}
                                    <Text fontWeight="medium">
                                        {project.company}
                                    </Text>
                                </Flex>
                            </Td>

                            <Td className="membersCell">
                                <AvatarGroup size="sm" max={3}>
                                    {project.members.map((member, index) => (
                                        <Avatar key={index} src={member} />
                                    ))}
                                </AvatarGroup>
                            </Td>

                            <Td className="budgetCell">
                                <Text>{project.budget}</Text>
                            </Td>

                            <Td className="completionCell bold fontSize-14">
                                <Text>{project.completion}%</Text>
                                <Divider className="divider" />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default ProjectsTable;
