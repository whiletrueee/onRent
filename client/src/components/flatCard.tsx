import { BsArrowRightCircleFill } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillPeopleFill } from "react-icons/bs";
import { useRole } from "@/context/rolte";

function FlatCard({
  society,
  id,
  buildingNumber,
  floorNumber,
}: {
  society: string | string[] | undefined;
  id: number;
  floorNumber: number;
  buildingNumber: number;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { role } = useRole();
  return (
    <>
      <div
        className="flex justify-between h-[6rem] p-2 border-2 border-mygreen rounded-md"
        onClick={onOpen}
      >
        <div className="w-[20%] bg-mypink flex justify-center items-center font-medium font-title text-myblack text-2xl rounded-lg">
          {society == "Estancia" ? (
            <span>
              {buildingNumber}
              {floorNumber % 10 == floorNumber
                ? `0${floorNumber}`
                : floorNumber}
              {id}
            </span>
          ) : (
            <span>
              {String.fromCharCode(buildingNumber + 64)}
              {floorNumber}
              {0}
              {id}
            </span>
          )}
        </div>
        <div className="w-[78%] flex justify-between items-center">
          <div className="flex flex-wrap justify-start gap-3 py-1 text-lg font-medium text-gray-400">
            <h3>
              <span className="text-xl font-bold text-mygreen">3</span> BHK
            </h3>
            <h4>
              <span className="text-xl font-bold text-mygreen">2</span> Bathroom
            </h4>
            <h4>Furnished</h4>
            <div className="flex justify-between w-full text-xl font-bold text-mygreen">
              <span>Available</span>
              <BsArrowRightCircleFill size={30} className="text-mygreen" />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isCentered={false}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalContent className=" bg-myblack w-full h-[60vh]">
          <div className="flex items-start justify-between p-5">
            <ModalHeader className="text-2xl font-bold text-mywhite ">
              {society == "Estancia" ? (
                <span>
                  {buildingNumber}
                  {floorNumber % 10 == floorNumber
                    ? `0${floorNumber}`
                    : floorNumber}
                  {id}
                </span>
              ) : (
                <span>
                  {String.fromCharCode(buildingNumber + 64)}
                  {floorNumber}
                  {0}
                  {id}
                </span>
              )}
            </ModalHeader>
            <ModalCloseButton color={"white"} />
          </div>
          <ModalBody className="px-5">
            <div className="flex flex-col justify-start gap-3 py-1 text-lg font-medium text-gray-400">
              <h3>
                <span className="text-xl font-bold text-mygreen">3</span> BHK
              </h3>
              <h4>
                <span className="text-xl font-bold text-mygreen">2</span>{" "}
                Bathroom
              </h4>
              <h4 className="flex items-center">
                <BsFillPeopleFill className="mr-2" /> 4/6 occupied
              </h4>
              <h4>Semi-Furnished</h4>
              <h4>Present : Boys Flat</h4>
              <h4>Future Preference : Boys & Girls</h4>
              <div className="flex justify-between w-full text-xl font-bold text-mygreen">
                <span>Available</span>
              </div>
              <h4 className="text-myorange">(3 students Intrested)</h4>
              {role == "Tenent" ? null : (
                <button
                  onClick={onClose}
                  className="px-4 py-1 text-xl font-bold rounded-md bg-myyellow text-myblack w-fit"
                >
                  I am Intrested
                </button>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FlatCard;
