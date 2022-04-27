import "./Nav.css"


function Nav ()  {
    return( 
        <>
        <li class="nav-item">
            <a class="nav-link mr-1" style="cursor: pointer;">
                requerimentos
            </a>
        </li>

        <div class="text-center options" id="mySidebar">
            <a href="{{ route('amostra.index') }}" class="mr-2">amostra</a>
            <a href="{{ route('funcionario.index') }}" class="mr-2">funcionário</a>
            <a href="{{ route('layout.index') }}" class="mr-2">layout</a>
            <a href="{{ route('reposicao.index') }}" class="mr-2">reposição</a>
            <a href="{{ route('frete.index') }}">frete</a>
        </div>
        </>
    )
};

export default Nav;