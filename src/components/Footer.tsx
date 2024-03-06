import {FooterItems} from "../constants/footer";
import {GitHub, Inbox, Linkedin, Twitter} from "react-feather";

export default function Footer(){
    const RenderNavIcon = ({type,variant}:{type:string,variant:string}) => {
        switch (type){
            case 'twitter':
                return(
                    <Twitter {...(variant==='fill'? {fill:'black'} : {})} size={'14px'}/>
                )
            case 'linkedin':
                return(
                    <Linkedin {...(variant==='fill'? {fill:'black'} : {})} size={'14px'}/>
                )
            case 'github':
                return(
                    <GitHub {...(variant==='fill'? {fill:'black'} : {})} size={'14px'}/>
                )
            default:
                return <></>
        }
    }
    return(
        <footer className={'grid grid-rows-appFooter gap-4 lg:gap-0 lg:grid-cols-appFooter py-6 w-full shrink-0 items-center px-4 md:px-6 bg-gray-100/20'}>
            <div className={'grid grid-flow-col gap-2 w-fit h-fit'}>
                <div className={'grid place-self-center'}><Inbox size={'14px'}/></div>
                <a href={FooterItems.primary.link} className={'text-xs hover:underline underline-offset-4'}>{FooterItems.primary.title}</a>
            </div>
            <nav className={'sm:ml-auto gap-4 grid grid-flow-row lg:grid-flow-col sm:gap-6'}>
                {
                    FooterItems.navItems.map((item,index) => (
                        <div key={index} className={'grid grid-flow-col gap-2 w-fit h-fit'}>
                            <div className={'grid place-items-center'}>
                                <RenderNavIcon type={item.type} variant={item.variant}/>
                            </div>
                            <a href={item.link} key={index}
                               className={'grid text-xs hover:underline underline-offset-4'}>
                                {item.title}
                            </a>
                        </div>
                    ))
                }
            </nav>
        </footer>
    )
}