import React from 'react';
import {
    CloseWrapper,
    CloseIcon,
    LinkWrapper,
    MainLink,
    MainLinkContainer,
    MenuWrapper,
    ServicesHeader,
    ServicesHeaderWrapper,
    ServicesMenuWrapper,
    SubService,
    SubServicesWrapper,
} from './styled-components/MobileMenu';
import { serviceData } from '../../utils';

export default function MobileMenu({ open, serviceMenu, setOpenMenu, setOpenServiceMenu }) {
    return (
        <MenuWrapper open={open} className="menu-wrapper">
            <CloseWrapper className="close-wrapper">
                <CloseIcon className="close-icon" onClick={() => setOpenMenu(false)}>
                    <svg viewBox="0 0 128 128">
                        <path d="M 64 6 C 48.5 6 33.9 12 23 23 C 12 33.9 6 48.5 6 64 C 6 79.5 12 94.1 23 105 C 34 116 48.5 122 64 122 C 79.5 122 94.1 116 105 105 C 116 94 122 79.5 122 64 C 122 48.5 116 33.9 105 23 C 94.1 12 79.5 6 64 6 z M 64 12 C 77.9 12 90.900781 17.399219 100.80078 27.199219 C 110.70078 36.999219 116 50.1 116 64 C 116 77.9 110.60078 90.900781 100.80078 100.80078 C 90.900781 110.60078 77.9 116 64 116 C 50.1 116 37.099219 110.60078 27.199219 100.80078 C 17.299219 91.000781 12 77.9 12 64 C 12 50.1 17.399219 37.099219 27.199219 27.199219 C 36.999219 17.299219 50.1 12 64 12 z M 50.5625 47.5 C 49.8 47.5 49.05 47.800391 48.5 48.400391 C 47.3 49.600391 47.3 51.499609 48.5 52.599609 L 59.800781 64 L 48.400391 75.300781 C 47.200391 76.500781 47.200391 78.4 48.400391 79.5 C 49.000391 80.1 49.8 80.400391 50.5 80.400391 C 51.2 80.400391 51.999609 80.1 52.599609 79.5 L 64 68.199219 L 75.300781 79.5 C 75.900781 80.1 76.700391 80.400391 77.400391 80.400391 C 78.100391 80.400391 78.9 80.1 79.5 79.5 C 80.7 78.3 80.7 76.400781 79.5 75.300781 L 68.199219 64 L 79.5 52.699219 C 80.7 51.499219 80.699609 49.600391 79.599609 48.400391 C 78.399609 47.200391 76.500391 47.200391 75.400391 48.400391 L 64 59.800781 L 52.699219 48.400391 C 52.099219 47.800391 51.325 47.5 50.5625 47.5 z" />
                    </svg>
                </CloseIcon>
            </CloseWrapper>
            <LinkWrapper className="link-wrapper">
                <MainLinkContainer className="main-link-container">
                    <MainLink className="main-link" to="/" onClick={() => setOpenMenu(false)}>
                        Home
                    </MainLink>
                </MainLinkContainer>
                <ServicesMenuWrapper classname="services-menu-wrapper">
                    <ServicesHeaderWrapper
                        className="services-header-wrapper"
                        onClick={() => setOpenServiceMenu(!serviceMenu)}
                    >
                        <ServicesHeader className="services-header">Services</ServicesHeader>
                        {!serviceMenu ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="open-icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="close-icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" />
                            </svg>
                        )}
                    </ServicesHeaderWrapper>
                    <SubServicesWrapper className="sub-services-wrapper" open={serviceMenu}>
                        {serviceData.map((e, i) => {
                            return (
                                <SubService
                                    className="sub-service"
                                    key={i}
                                    to={`/services/${e.link}`}
                                    onClick={() => {
                                        setOpenServiceMenu(false);
                                        setOpenMenu(false);
                                    }}
                                >
                                    {e.service}
                                </SubService>
                            );
                        })}
                    </SubServicesWrapper>
                </ServicesMenuWrapper>
                <MainLinkContainer className="main-link-container">
                    <MainLink
                        className="main-link"
                        to="/contact"
                        onClick={() => {
                            setOpenMenu(false);
                            setOpenServiceMenu(false);
                        }}
                    >
                        Contact
                    </MainLink>
                </MainLinkContainer>
            </LinkWrapper>
        </MenuWrapper>
    );
}
