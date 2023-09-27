import './App.css'
import Header from "./Header.tsx";
import Body from "./Body.tsx";
import BlogEntry from "./BlogEntry.tsx";
import Profile from "./Profile.tsx";

export default function App() {

    const blogData = [
        {
            id: "1",
            headline: "Blogentry #1",
            main: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        },
        {
            id: "2",
            headline: "Blogentry #2",
            main: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        },
        {
            id: "3",
            headline: "Blogentry #3",
            main: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        }
    ]

    const myProfileData = {
        name: "Anne",
        codelang: "Java",
        level: "Beginner"
    }

    return (
        <>
            <Header />
            <Body />
            {blogData.map((blogItem) => <BlogEntry
                key={blogItem.id}
                title={blogItem.headline}
                mainContent={blogItem.main}
            />)}
            <Profile
                name={myProfileData.name}
                codelang={myProfileData.codelang}
                level={myProfileData.level}
            />
        </>
    )
}
