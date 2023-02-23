document.getElementById('navbar').innerHTML = `
<nav class="navbar navbar-expand-sm bg-dark">
<div class="container-fluid">
    <a class="navbar-brand text-light" href="../HTML/homepage.html">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link text-light link" href="#">Steuern</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light link" href="#">Disskussionen</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown">Infos</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="./Praktikum.html">Praktikum</a></li>
                    <li><a class="dropdown-item" href="#">Sommerjob</a></li>
                    <li><a class="dropdown-item" href="#">Nebenjob</a></li>
                    <li><a class="dropdown-item" href="#">Aushilfarbeiten</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</nav>`