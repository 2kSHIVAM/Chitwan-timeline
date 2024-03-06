import {HeaderNavItems} from "../constants";
import {Sun} from "react-feather";
import { trackEvent } from '../utils';
import { EVENTS } from '../constants/events';
export default function Header(){
  const onHeaderNavItemClick = (props:any) => {
    trackEvent(EVENTS.HEADER_NAV_CLICK,{
      title: props.title,
      metaData: props.metaData
    })
  }
    return(
        <header className={'px-8 lg:px-10 py-4 lg:py-6 gap-2 grid grid-cols-appHeader w-full h-20'}>
            <div className={'grid grid-flow-col gap-2'}>
                <div className={'grid place-self-center'}>
                    <Sun/>
                </div>
            </div>
            <div></div>
            <nav className={'ml-auto grid grid-flow-col'}>
                {
                    HeaderNavItems.map((item, index) => (
                        <button onClick={() => onHeaderNavItemClick(item)} key={index} className={'font-medium grid place-self-center text-sm px-1 lg:px-3 hover:underline underline-offset-4'}>
                            {item.title}
                        </button>
                    ))
                }
            </nav>
        </header>
    )
}