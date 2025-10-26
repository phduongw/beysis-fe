import React, {FC} from 'react';
import {redirect} from "../../i18n/navigation";

interface Props {
    lang: string
}

const HomePage: FC<{ params: Promise<Props> }> = async ({ params }) => {
    const lang = (await params).lang;

    return redirect({
        href: "/home",
        locale: lang
    });
};

export default HomePage;