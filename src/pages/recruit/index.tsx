import InputField from '@/components/InputField'
import StepperInput from '@/components/StepperInput'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Heading,
  Input,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  VStack,
  useSteps,
} from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'

const stepList = [{ stepIndex: 1 }, { stepIndex: 2 }]

const teamList = [
  {
    name: '기획',
    fieldName: 'planning',
    detail: [
      {
        name: '기획자',
        fieldName: 'planner',
      },
      {
        name: '프로덕트 매니저',
        fieldName: 'productManager',
      },
      {
        name: '프로젝트 오너',
        fieldName: 'projectOwner',
      },
      {
        name: '기타',
        fieldName: 'etc',
      },
    ],
  },
  {
    name: '디자인',
    fieldName: 'design',
    detail: [
      {
        name: '프로젝트 디자이너',
        fieldName: 'projectDesigner',
      },
      {
        name: 'UXUI 디자이너',
        fieldName: 'uxuiDesigner',
      },
      {
        name: 'UX 디자이너',
        fieldName: 'uxDesigner',
      },
      {
        name: 'UI 디자이너',
        fieldName: 'uiDesigner',
      },
      {
        name: 'BX 디자이너',
        fieldName: 'bxDesigner',
      },
      {
        name: '그래픽 디자이너',
        fieldName: 'graphicDesigner',
      },
    ],
  },
  {
    name: 'FE',
    fieldName: 'fe',
    detail: [
      {
        name: '리액트',
        fieldName: 'react',
      },
      {
        name: '플러터',
        fieldName: 'flutter',
      },
      {
        name: 'iOS',
        fieldName: 'ios',
      },
      {
        name: 'AOS',
        fieldName: 'aos',
      },
    ],
  },
  {
    name: 'BE',
    fieldName: 'be',
    detail: [
      {
        name: '스프링',
        fieldName: 'spring',
      },
      {
        name: '장고',
        fieldName: 'django',
      },
      {
        name: '기타',
        fieldName: 'etc',
      },
    ],
  },
]

const Recruit = () => {
  const { register, control, getValues } = useForm({})
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: stepList.length,
  })

  return (
    <Box>
      <Heading as="h1" size="xl">
        새 리크루팅 시작
      </Heading>
      <Divider my="18px" />
      <Stepper index={activeStep} w="200px">
        {stepList.map((step) => (
          <Step key={step.stepIndex} onClick={() => setActiveStep(step.stepIndex)}>
            <StepIndicator>
              <StepStatus
                active={<StepNumber />}
                complete={<StepNumber />}
                incomplete={<StepNumber />}
              />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <VStack align="flex-start" spacing="24px" mt="12px">
        <section>
          <Heading as="h3" size="md" mt="36px" mb="24px">
            리쿠르팅 목표
          </Heading>
          <Flex gap="20px">
            <InputField
              label="기수"
              renderInput={() => (
                <Input
                  w="120px"
                  placeholder="ex) 1기"
                  {...register('generation', { required: true })}
                />
              )}
            />
            <InputField
              label="팀 개수"
              renderInput={() => (
                <Controller
                  control={control}
                  name="teamCount"
                  defaultValue={0}
                  render={({ field }) => <StepperInput countText="개" {...field} />}
                />
              )}
            />
            <InputField
              label="전체 회원"
              renderInput={() => (
                <Input
                  w="190px"
                  placeholder="ex) 24명"
                  {...register('memberCount', { required: true })}
                />
              )}
            />
          </Flex>
        </section>
        <section>
          <Heading as="h3" size="md" my="24px">
            팀 별 파트 구성
          </Heading>
          <Grid rowGap="48px" columnGap="24px" templateColumns="repeat(4, 1fr)">
            {teamList.map((team) => (
              <InputField
                key={team.name}
                label={team.name}
                renderInput={() => (
                  <Controller
                    control={control}
                    name={team.fieldName + '.count'}
                    defaultValue={0}
                    render={({ field }) => <StepperInput countText="명" {...field} />}
                  />
                )}
              />
            ))}
            {teamList.map((team) => (
              <InputField
                key={team.name}
                label={team.name + ' 상세'}
                renderInput={() => (
                  <VStack align="flex-start" spacing="8px">
                    {team.detail.map((detail) => (
                      <Controller
                        key={detail.fieldName}
                        control={control}
                        name={team.fieldName + '.' + detail.fieldName}
                        defaultValue={false}
                        render={({ field: { onChange, value, ref } }) => (
                          <Checkbox
                            ref={ref}
                            onChange={(e) => onChange(e.target.checked)}
                            isChecked={value}
                          >
                            {detail.name}
                          </Checkbox>
                        )}
                      />
                    ))}
                  </VStack>
                )}
              />
            ))}
          </Grid>
        </section>
      </VStack>
      <Divider my="18px" />
      <Flex justifyContent="space-between">
        <Button variant="outline" w="300px" onClick={() => setActiveStep(activeStep - 1)}>
          이전
        </Button>
        <Button colorScheme="blue" w="300px" onClick={() => console.log(getValues())}>
          다음
        </Button>
      </Flex>
    </Box>
  )
}

export default Recruit
