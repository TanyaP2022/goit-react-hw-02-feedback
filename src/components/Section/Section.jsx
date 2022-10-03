import PropTypes from 'prop-types';
import {SectionStyle, Title} from './SectionStyle'

export const Section = ({ title, children }) => {
    return (
        <SectionStyle >
            {title && <Title>
                {title.toUpperCase()}
            </Title>}
            {children}
        </SectionStyle>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired
}