import './Content.css'

function Content(props: Readonly<{ children: React.ReactNode; }>): React.ReactNode {
    return <main className={'content'}>{props.children}</main>;
}

export default Content;