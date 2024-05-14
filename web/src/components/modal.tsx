'use client'
import { Pen } from 'lucide-react'
import { useState } from 'react'

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      {/* Button to open the modal */}
      <button className="btn" onClick={openModal}>
        Open Modal
      </button>

      {/* Modal component */}
      {isModalOpen && (
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeModal}>Close</button>
          </form>
        </dialog>
      )}
    </div>
  )
}
