import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Handbag } from "lucide-react";

const CarrinhoCompras = () => {
  return (
    <div>
      <Dialog>
        <div>
          <DialogTrigger asChild>
            <button className="bg-white rounded-full py-3 px-3">
              <Handbag />{" "}
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div></div>
            <DialogFooter>
              <DialogClose asChild>
                <button>Cancel</button>
              </DialogClose>
              <button>Save changes</button>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default CarrinhoCompras;
