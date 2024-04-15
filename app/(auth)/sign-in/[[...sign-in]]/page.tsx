import { SignIn } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignIn
      afterSignInUrl={"/dashboard"}
      signUpUrl="/sign-up"
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
        },
      }}
    />
  );
}
