import styled from "styled-components";

const SidebarWrapper = styled.div`
    width: 300px;
    height: 100vh;
    background-color: white;
    padding: 20px;
    background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    .sidebar_link {
        padding: 10px 20px;
        border: 1px solid green;
        margin-bottom: 2px;
        display: block;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
`;

export default SidebarWrapper;