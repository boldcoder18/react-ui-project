import { ArrowUpRight } from 'lucide-react';
import Rightcardcontent from './Rightcardcontent';

const Rightcard = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt='' />

            <Rightcardcontent color={props.color} tag={props.tag} id={props.id} />
        </div>
    )
}

export default Rightcard