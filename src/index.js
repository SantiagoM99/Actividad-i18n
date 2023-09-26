import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const lang = navigator.language.split(/[-_]/)[0];
const messageLang = lang === 'es' ? localeEsMessages : localeEnMessages;
ReactDOM.render(
    
    <IntlProvider locale={lang} messages= {messageLang}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);
