import React from 'react'

export default function Paginacao({nextPage , prevPage}) {
    return (
        <div id = "botoesPaginacao">
            {prevPage &&<button class = "botaoPaginacao" onClick = {prevPage} > Página anteior</button>}
            {nextPage && <button class = "botaoPaginacao" onClick = {nextPage}> Próxima página </button>}
        </div>
    )
}
