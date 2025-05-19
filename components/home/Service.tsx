import { Anchor, Eye, Flame } from "lucide-react";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";

export default function Service() {
  return (
    <div className="snap-start min-h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-20 mt-10">
      <h2 className="text-5xl font-bold text-center">Our Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 container mx-auto">
        <Modal>
          <ModalTrigger className=" flex justify-center group/modal-btn cursor-pointer">
            <div className="h-52 shadow-lg rounded-2xl p-6 flex flex-col gap-8 items-center justify-center hover:bg-amber-200 hover:shadow-2xl transition-all duration-75">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center">
                <Flame size={40} />
              </div>

              <p className="text-gray-800 font-semibold text-2xl text-pretty text-center">
                Create the post with your resume.
              </p>
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <p>Test</p>
            </ModalContent>
          </ModalBody>
        </Modal>
        <Modal>
          <ModalTrigger className=" flex justify-center group/modal-btn cursor-pointer">
            <div className="h-52 shadow-lg rounded-2xl p-6 flex flex-col gap-8 items-center justify-center hover:bg-amber-200 hover:shadow-2xl transition-all duration-75">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center">
                <Anchor size={40} />
              </div>
              <p className="text-gray-800 font-semibold text-2xl text-pretty text-center">
                Create job description
              </p>
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <p>Test</p>
            </ModalContent>
          </ModalBody>
        </Modal>
        <Modal>
          <ModalTrigger className=" flex justify-center group/modal-btn cursor-pointer">
            <div className="h-52 shadow-lg rounded-2xl p-6 flex flex-col gap-8 items-center justify-center hover:bg-amber-200 hover:shadow-2xl transition-all duration-75">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center">
                <Eye size={40} />
              </div>
              <p className="text-gray-800 font-semibold text-2xl text-pretty text-center">
                Match Right with the job
              </p>
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <p>Test</p>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
