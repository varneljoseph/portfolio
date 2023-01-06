import React from 'react';
import i18n from "i18next";
import { withTranslation, WithTranslation } from 'react-i18next';
import {Form} from 'react-bootstrap';

// import { useTranslation } from "react-i18next";

interface State {
    language: string;
}

interface Props extends WithTranslation {}



class LanguageSwitcher extends React.Component<WithTranslation, State, Props> {


    constructor(props: Props) {
        super(props);
        this.state = {
            language: 'en'
        };
    }

    changeLang = async (event: any) => {
        i18n.changeLanguage(event.target.value);
        this.setState({...this.state, language: event.target.value});
        await new Promise(r => setTimeout(r, 200));
    }

    render() {
        const { t, i18n } = this.props;
        const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';


        return (
            <div className="nav-link">
                <Form>
                    <Form.Group controlId="form-language">
                        <Form.Control value={getCurrentLng()} as="select" onChange={this.changeLang.bind(this)} ref="valid_for"  bsPrefix="btn btn-transparent">
                            {i18n.options.supportedLngs
                                .filter((i) => i !== 'cimode')
                                .map((lng, index) => {
                                    return (<option key={index} value={lng}>{`${t('supported_lng.'+lng)}`}</option>)
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default withTranslation()(LanguageSwitcher);