import React from 'react';
//COMPONENTS
import { SubTitle } from '../../components/BaseComponents';
import PageContainer from '../../components/PageComponents/PageContainer';

import { useAuth } from '../../context/authContext';

function LandingPage() {
    const { user } = useAuth()
    return (
        <PageContainer title={"Landing page"} user={user}>
            <SubTitle>No quiz running here!</SubTitle>
        </PageContainer>
    );
}

export default LandingPage;