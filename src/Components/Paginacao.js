import React from 'react'

export default function Paginacao({nextPage , prevPage}) {
    return (
        <div>
            {prevPage &&<button onClick = {prevPage} > Página anteior</button>}
            {nextPage && <button onClick = {nextPage}> Próxima página </button>}
        </div>
    )
}
