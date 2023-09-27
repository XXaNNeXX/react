import './App.css'
import Header from "./Header.tsx";
import Body from "./Body.tsx";
import BlogEntry from "./BlogEntry.tsx";

export default function App() {

    const blogData = [
        {
        headline: "Blogentry #1",
        main: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        },
        {
            headline: "Blogentry #2",
            main: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        },
        {
            headline: "Blogentry #3",
            main: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        }
    ]

    return (
        <>
            <Header />
            <Body />
            {blogData.map((blogItem) => <BlogEntry
                title={blogItem.headline}
                mainContent={blogItem.main}
            />)}
        </>
    )
}
