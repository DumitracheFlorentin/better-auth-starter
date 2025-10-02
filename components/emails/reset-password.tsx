import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface ForgotPasswordEmailProps {
  resetUrl: string;
  userEmail: string;
  username: string;
}

const ForgotPasswordEmail = (props: ForgotPasswordEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[32px] font-bold text-gray-900 m-0">
                Reset Your Password
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hi {props.username},
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                We received a request to reset the password for your account. If
                you made this request, click the button below to set a new
                password.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                If you didn't request a password reset, you can safely ignore
                this email. Your password will remain unchanged.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={props.resetUrl}
                className="bg-blue-600 text-white px-[32px] py-[12px] rounded-[6px] text-[16px] font-semibold no-underline box-border hover:bg-blue-700"
              >
                Reset Password
              </Button>
            </Section>

            {/* Security Info */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[12px]">
                <strong>Security tip:</strong> This link will expire in 24 hours
                for your security. If you need to reset your password after
                that, please request a new reset link.
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px]">
                If the button above doesn't work, copy and paste this link into
                your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all mt-[8px]">
                {props.resetUrl}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0">
                This email was sent to {props.userEmail}. If you have any
                questions, please contact our support team.
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center mt-[12px] m-0">
                © 2024 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center mt-[8px] m-0">
                123 Business Street, Suite 100, City, State 12345
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ForgotPasswordEmail;
