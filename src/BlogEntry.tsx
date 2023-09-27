type BlogContent = {
    title: string
    mainContent: string
}

export default function BlogEntry(content: BlogContent) {

    return (

        <div className="body blog-entry">
            <h3>{content.title}</h3>
            <p>{content.mainContent}</p>
        </div>
    )
}