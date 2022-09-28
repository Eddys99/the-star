<template>
    <header>
        <div id = "nav-bar">
            <nav>
                <ul>
                    <li>
                        <router-link to="/authenticate"> Login </router-link>
                    </li>
                    <li>
                        <router-link to="/register"> Register </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <router-view/>
</template>

<style>
body {
    margin: 0;
    background-color: #1d1d1d;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

header {
    background-color: #242424;
}

#nav-bar {
    width: 95%;
    margin: 0 auto;
    background-color: #242424;
    overflow: hidden;
}

#nav-bar ul {
    list-style-type: none;
}

#nav-bar ul li {
    float: right;
    display: inline;
    margin: 0 10px 10px 10px;
}

#nav-bar ul li a {
    display: block;
    text-decoration: none;
    color: white;
    background-color: blueviolet;
    padding: 10px 25px 10px 25px;
    border-radius: 25px;
    opacity: 0.9;
    border: none;
}

</style>
