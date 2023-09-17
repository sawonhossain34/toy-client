// import blog from '../../assets/blog-bg.jpg'

const Blog = () => {
    return (
        <div className="card  bg-base-100 shadow-xl grid md:grid-cols-1 lg:grid-cols-2">
            <div className="card-body items-center text-center">
                <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h2>
                <p>What Is A Token?
                    Tokens are pieces of data that carry just enough information to facilitate the process of determining a users identity or authorizing a user to perform an action. All in all, tokens are artifacts that allow application systems to perform the authorization and authentication process.</p>

                <p>
                    What Is a Refresh Token?
                    As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to . the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.
                </p>
                <hr />
            </div>
            
            <div className="card-body items-center text-center">
                <h2 className="card-title">Compare SQL and NoSQL databases?
                </h2>

                <div className="grid md:grid-cols-2">
                    <div>
                        <h3 className="text-center">SQL</h3>
                        <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                        <p>These databases have fixed or static or predefined schema</p>
                        <p>These databases are not suited for hierarchical data storage.</p>
                        <p>These databases are not suited for hierarchical data storage.</p>
                        <p>Vertically Scalable</p>
                    </div>
                    <div>
                        <h3>NoSQL</h3>
                        <p>Non-relational or distributed database system.</p>
                        <p>They have a dynamic schema
                        </p>
                        <p>These databases are best suited for hierarchical data storage.
                        </p>
                        <p>These databases are not so good for complex queries
                        </p>
                        <p>Horizontally scalable
                        </p>
                        <p>Follows CAP(consistency, availability, partition tolerance)
                        </p>
                        <p></p>
                    </div>
                </div>

                <hr />
            </div>
            
            <div className="card-body items-center text-center">
                <h2 className="card-title">What is express js? What is Nest JS ?
                </h2>

                <h3>What is express js?</h3>
                <p>NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript.

                    This framework is inspired by Angular, so most of what you find in Angular can also be found in Nest, including providers, middleware, components, and services. It is safe to say that Nest can be easily learned by Angular developers for any type of project.</p>

                    <h3>What is Nest JS ?</h3>

                <p>
                    What Is a Refresh Token?
                    As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to . the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.
                </p>
            </div>
            
            <div className="card-body items-center text-center">
                <h2 className="card-title">What is MongoDB aggregate and how does it work ?
                </h2>

             
                <p>When you need to do more complex aggregation, you can use the MongoDB aggregation pipeline . Aggregation pipelines are collections of stages that, combined with the MongoDB query syntax, will allow you to obtain an aggregated result.</p>


                <p>
                Before we dive into the code, lets understand what the aggregation pipeline itself does and how it works. In the aggregation pipeline, you list out a series of instructions in a stage. For each stage that is defined, MongoDB executes them one after another in order to give a finalized output you are able to use.
                </p>
            </div>
        </div>
    );
};

export default Blog;