import checkPropTypes from 'check-prop-types';


export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-testid="${val}"]`);
} 

export const checkProps = (component, confomingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        confomingProps,
        'prop',
        component.name);
        expect(propError).toBeUndefined();
    
}