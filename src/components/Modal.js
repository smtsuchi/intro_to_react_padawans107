import React from 'react'

export default function Modal({ action, actionText='Do Action', triggerButtonText='click me for modal', modalTitle='default title', modalBody='blah', color='primary' }) {
    return (
        <>
            <button type="button" class={`btn btn-${color}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                {triggerButtonText}
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{ modalTitle }</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {modalBody}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class={`btn btn-${color}`} onClick={action}>{actionText}</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
