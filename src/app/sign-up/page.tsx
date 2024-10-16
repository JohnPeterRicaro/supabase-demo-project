import SignUpForm from "@/components/SignUpForm";

const Page = () => {
  return (
    <div className={"w-full h-screen flex justify-center items-center"}>
      <div
        className={
          "w-[400px] h-auto rounded-[24px]  shadow-[0px_0px_8px_4px_rgba(255,255,255,0.04)]"
        }
      >
        <SignUpForm />
      </div>
    </div>
  );
};

export default Page;
