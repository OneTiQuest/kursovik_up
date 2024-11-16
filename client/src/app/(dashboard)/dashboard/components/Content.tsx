function Content(props: Readonly<{ children: React.ReactNode; }>): React.ReactNode {
    return <div className={'content'}>{props.children}</div>;
}

export default Content;