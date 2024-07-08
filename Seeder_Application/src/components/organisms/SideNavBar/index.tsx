    import React, { useState } from "react";
    import { Card, Stack } from "@mui/material";
    import { styled } from "@mui/material/styles";
    import  Typography  from "../../atoms/Typography";
    import CustomButton from "../../atoms/Button";
    import IconPath from "../../../utils/Constants";


    export interface SideNavprops {
        activeIndex?: number | null;
        id?: string;
    }

    const StyledCard = styled(Card)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width:'100%',
        maxWidth: '250px',
        minWidth:'250px',
        height: '100vh',
        minHeight: '450px',
        overflowY: 'auto',
        overflowX: 'auto',
        padding: theme.spacing(8, 5),
        backgroundColor: theme.palette.background.elevation1,
        '@media (max-width: 600px)': {
            width: '100%',
        },
    }));

    const LogoStack = styled(Stack)(({theme}) => ({
        width: '100%',
        maxWidth: '210px',
        height: '36px',
        alignItems: 'center',
        flexDirection: 'row'
    }));

    const StyledLogo = styled('img')(({theme}) => ({
        width: '100%',
        maxWidth: '29.88px',
        height: 'auto',
        marginRight: theme.spacing(2)
    }));

    const MenuStack = styled(Stack)(({theme}) => ({
        marginTop: '40px',
    }));

    const ButtonStack = styled(Stack)<{ active?: string }>(({theme, active}) => ({
        width: '100%',
        maxWidth: '210px',
        height: '49px',
        backgroundColor: active === 'true' ? theme.palette.background.elevation2 : 'transparent',
        borderRadius: '12px',
        cursor: 'pointer',
        padding: theme.spacing(2),
        '& img': {
            filter: active === 'true' ? 'invert(80%) brightness(1.2)' : 'none',
            transition: 'fill 0.3s ease',
        },
        flexDirection: 'row',
    }));

    const StyledButton = styled(CustomButton)<{ active?: string }>(({theme, active }) => ({
        color: active === 'true' ? theme.palette.text.highEmphasis : theme.palette.text.lowEmphasis,
        backgroundColor: 'transparent !important', 
        '&:hover': {
        backgroundColor: 'transparent !important',
        },
        '& span':{
            display: 'none'
        },
        marginLeft: theme.spacing(2)

    }));

    const FooterStack = styled(Stack)(({theme}) => ({
        flexDirection: 'row',
        paddingBottom: '100px',
        padding: theme.spacing(3),
        '@media (max-width: 600px)': {
            marginTop: theme.spacing(8),
        },
    }))

    const SideNavBar: React.FC<SideNavprops> = ({ activeIndex = null, id }) => {

        const [ activeButton, setActiveButton ] = useState<number | null>(activeIndex);

        const menuItems = [
            { id: 1, src: IconPath.HomeIcon, alt: 'HomeIcon', children: 'Home' },
            { id: 2, src: IconPath.CashIcon, alt: 'CashIcon', children: 'Cash Acceleration' }
        ];
        
        const handleMenuClick = (index: number) => {
            setActiveButton(index);
        }

        return(

            <StyledCard id={id}>
                <div>
                <LogoStack>
                    <StyledLogo src={IconPath.seeder} alt="Seeder Logo" />
                    <Typography variant="heading2" children='Seeder' />
                </LogoStack>
                <MenuStack>
                    {menuItems.map((item ) => (
                        <ButtonStack 
                            key={ item.id }  
                            active={(activeButton === item.id).toString()}
                            onClick={() => { 
                                handleMenuClick(item.id)
                            }}
                        >
                            <img src={item.src} alt={item.alt} />
                            <StyledButton variant="text" active={(activeButton === item.id).toString()} children={item.children}/>
                        </ButtonStack>
                    ))}
                </MenuStack>
                </div>
                <FooterStack>
                    <img src={IconPath.FlashIcon} alt="FlashIcon" />
                    <StyledButton variant="text" children="Watch how to"/>
                </FooterStack>
            </StyledCard>
        );
    };

    export default SideNavBar;