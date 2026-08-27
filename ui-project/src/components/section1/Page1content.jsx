import Leftcontent from "./Leftcontent"
import Rightcontent from "./Rightcontent"

const Page1content = (props) => {
    return (
        <div className='pd-10 pt-4  flex items-center gap-8 h-[80vh] px-12'>
            <Leftcontent />
            <Rightcontent users={props.users} />
        </div>
    )
}

export default Page1content