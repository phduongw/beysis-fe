import React from 'react';
import {useTranslations} from "next-intl";

const HomePage = () => {
    const t = useTranslations();
    return (
        <div>
            {t('home')}
        </div>
    );
};

export default HomePage;