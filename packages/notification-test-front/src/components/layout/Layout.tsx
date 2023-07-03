"use client";
import { Box, Container } from "@mui/material";
import AppHeader from "./AppHeader";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return <Box>
        <AppHeader />
        <Container maxWidth="xl" sx={{py: 2}}>
            {children}
        </Container>
    </Box>;
};

export default Layout;