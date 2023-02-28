document.getElementById('navbar').innerHTML = `

<div class="container-fluid">
    <a class="navbar-brand text-light" href="../HTML/index.html">Home</a>
    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar">
        <i class="bi bi-list text-white navbar-toggler-icon"></i>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link text-light link" href="#">Steuern</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light link" href="./Kommentare.html">Kommentare</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown">Infos</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="./Praktikum.html">Praktikum</a></li>
                    <li><a class="dropdown-item" href="./Sommerjob.html">Sommerjob</a></li>
                    <li><a class="dropdown-item" href="./Nebenjob.html">Nebenjob</a></li>
                    <li><a class="dropdown-item" href="./Aushilfarbeit.html">Aushilfarbeiten</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
`

//<nav class="navbar navbar-expand-sm bg-dark">
//</nav>