import Container from "../../Container";
import UserMenu from "./UserMenu";
import Search from "./Search";
import Logo from "./Logo";

const NavigationBar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shodow-sm">
            <div
                className="
                py-4
                border-b-[1px]
            "
            >
                <Container>
                    <div
                        className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
            "
                    >
                    <Logo />
                    <Search />
                    <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default NavigationBar;