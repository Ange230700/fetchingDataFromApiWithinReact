import PropTypes from 'prop-types';

const DisplayEmployee = ({employee}) => {
    return (
        employee && (
        <div className='DisplayEmployee'>
            <img src={employee.picture.medium} alt={employee.name.first} />
            <ul>
                <li>Gender: {employee.gender}</li>
                <li>
                    Name: {employee.name.title} {employee.name.last}{' '}
                    {employee.name.first}
                </li>
                <li>E-mail: {employee.email}</li>
                <li>
                    Location: {employee.location.street.number}{' '}
                    {employee.location.street.name}, {employee.location.postcode}{' '}
                    {employee.location.city}
                </li>
            </ul>
        </div>
        )
    );
};

DisplayEmployee.propTypes = {
    employee: PropTypes.shape({
        gender: PropTypes.string,
        name: PropTypes.shape({
            title: PropTypes.string,
            first: PropTypes.string,
            last: PropTypes.string,
        }),
        location: PropTypes.shape({
            street: PropTypes.shape({
                number: PropTypes.number,
                name: PropTypes.string,
            }),
            city: PropTypes.string,
            postcode: PropTypes.number,
        }),
        email: PropTypes.string,
        picture: PropTypes.shape({
            medium: PropTypes.string,
        }),
    }),
}

export default DisplayEmployee;