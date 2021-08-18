import HeaderWrapper from "./HeaderWrapper"
const Header = ({ children }) => {

    return (
        <HeaderWrapper>
            <button className="btn btn-danger">salom</button>
            {children}
        </HeaderWrapper>
    )
}

export default Header
