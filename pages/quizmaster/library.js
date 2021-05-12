import React from 'react';

import { useQuizMaster } from '../../context/quizMasterContext';

import NavBar from '../../components/NavBar';
import { PageContainer } from '../../components/BaseComponents';
import Link from 'next/link';



function library(props) {
    const { quizes, userData } = useQuizMaster();

    return (
        <PageContainer>
            <NavBar />
            <main>
                <div>
                    {quizes && quizes.map((i, index) => {
                        return (
                            <div key={index}>
                                <Link href={`/createquiz/${i.id}`}>
                                    <a>{i.quizName}</a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </main>
        </PageContainer>
    );
}

export default library;