
//* Coding Challenge:
//? Create a React application that demonstrates the use of props by building a simple profile card system. Each profile card should display a user's name, age, and a personalized greeting message. Additionally, use props.children to allow for flexible content inside each profile card.

//* Challenge Details:

//? Create a Main Component: Profile
// This component should render multiple ProfileCard components, each with different user data and children elements.

//? Create a ProfileCard Component:
// This component should accept props for the user's name, age, and a personalized greeting message (as JSX).
// The component should also use props.children to render additional content inside the card.

//* Requirements:

//? Props Usage:
// Pass the user's name, age, and a personalized greeting message as props to the ProfileCard component.

//? Children Prop:
// Use props.children to allow for flexible content inside the ProfileCard component, such as additional text, images, or buttons.

//? Dynamic Content:
// The personalized greeting message should be a JSX element passed as a prop.
// Styling:

// Add basic CSS to style the profile cards for better visual presentation.

function Profile(){
    return(
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
            name="Rishi"
            age = {22}
            greeting = {
                // children  div
                <div>  
                    <strong>Hi Rishi, have a wonderful time</strong>
                </div>
            }
            >
                {/* children */}
                <p>Hobbies : Learn new Thinks , nature lover</p>
                <button>Contact Now</button>
            </ProfileCard>
        </div>
    )
}
export default Profile;

function ProfileCard(props){
    const {name,age,greeting,children} = props;
    return(
        <>
            <h2>Name:{name}</h2>
            <p>Age: {age}</p>
            <p>Greeting: {greeting}</p>
            <div>{children}</div>
        </>
    )
}