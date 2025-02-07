import Image from 'next/image';
import { Flex, Center, Text, Box, Grid } from '@chakra-ui/react';

import { PageTitle } from '@/app/components/PageTitle';
import { Article } from '@/app/components/Article';
import { BaseContainer } from '@/app/components/BaseContainer';
import { TogetherSection } from '@/app/components/TogetherSection';
import { Phone } from '@/app/components/Phone';
import { homeMovers } from '@/app/data';

const TransactionProcess = ({ title, items }) => (
  <Box as="section" px="167px">
    <Flex className="flex">
      {title}
      <Image
        src="/images/SmallFingerClick.png"
        alt="transaction-process"
        width={219}
        height={181}
        style={{
          minWidth: '219px',
        }}
      />
    </Flex>
    <Grid gap="40px" templateColumns="repeat(3, minmax(0, 1fr))">
      {items.map(({ id, titles, text }) => (
        <Flex key={id} flexDir="column" gap="20px">
          <Center boxSize="40px" rounded="full" bgColor="coral">
            <Text as="span" color="white" fontSize="20px" lineHeight="24px" fontWeight="medium">
              {id}
            </Text>
          </Center>
          <Box>
            {titles.map((item, i) => (
              <Text as="h4" key={`${id}-${i}`} fontSize="md" lineHeight="md" fontWeight="semibold">
                {item}
              </Text>
            ))}
          </Box>
          <Text fontSize="base" lineHeight="base" fontWeight="light">
            {text}
          </Text>
        </Flex>
      ))}
    </Grid>
  </Box>
);

const HomeMovers = () => (
  <>
    <BaseContainer p={{ base: '16px', md: '0' }} mb={{ base: '24px', md: '0' }}>
      <PageTitle {...homeMovers.header} />
      <Flex as="section" flexDir="column" gap="24px" mt={{ base: '40px', md: '75px' }}>
        {homeMovers.articles.map(({ id, ...item }, i) => (
          <Article key={id} revert={!(i % 2)} {...item} />
        ))}
      </Flex>
      <Flex
        as="section"
        gap="48px"
        mt={{ base: '40px', md: '144px' }}
        justifyContent="center"
        flexDir={{ base: 'column-reverse', md: 'row' }}
      >
        <Flex gridArea="two" justifyContent="center">
          <Phone />
        </Flex>
        <Flex flexDir="column" gap={{ base: '24px', md: '40px' }} w={{ base: 'auto', md: '437px' }}>
          <Text
            as="h2"
            fontSize={{ base: 'semi-md', md: '2xl' }}
            lineHeight={{ base: '40px', md: '2xl' }}
            fontWeight="bold"
            letterSpacing="-2px"
            maxW="350px"
          >
            Here’s{' '}
            <Text as="span" color="coral">
              how
            </Text>{' '}
            our service works
          </Text>
          <Flex flexDir="column" gap="32px">
            <Text fontSize={{ base: '16px', md: 'base' }} lineHeight={{ base: '26px', md: 'base' }} fontWeight="light">
              Our Home Mover App is your one-stop hub for managing initial compliance tasks for your move, all with just
              a few clicks.
              <br />
              <br />
              <Text as="span" fontWeight="thin" letterSpacing="-0.2px">
                Available on mobile or via the web, our user-friendly platform is tailored to guide you through the
                legal hoops of buying and selling. Sellers can effortlessly complete compliance documentation digitally
                to e-signing estate agency contracts. With regulations on the rise, paperwork can pile up fast.
                Remember, it&apos;s a legal requirement to complete all this paperwork, that&apos;s why we&apos;re here
                to help you tackle it all early on, ensuring a smooth journey with no hiccups down the road.
              </Text>
            </Text>
            {/*<PlatformButtons />*/}
          </Flex>
        </Flex>
      </Flex>
      <Box as="section" mt="140px" display={{ base: 'none', md: 'block' }}>
        <TransactionProcess {...homeMovers.transactionProcess} />
      </Box>
    </BaseContainer>
    <TogetherSection />
  </>
);

export default HomeMovers;
