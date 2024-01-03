import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonGames from './singletonGames'
import singletonHomaLab from './singletonHomaLab'
import singletonCommunity from './singletonCommunity'
import singletonContact from './singletonContact'
import singletonCareers from './singletonCareers'
import singletonAbout from './singletonAbout'
import singletonPrivacy from './singletonPrivacy'
import singletonTerms from './singletonTerms'
import singletonSubscriptionTerms from './singletonSubscriptionTerms'
import singletonAdmin from './singletonAdmin'
import singletonNavigation from './singletonNavigation'
import singletonBlog from './singletonBlog'
import singletonFaqs from './singletonFaqs'
import singletonCookiePolicy from './singletonCookiePolicy'

// Documents
import blog from './blog'
import categories from './categories'
import authors from './authors'
import team from './team'
import games from './games'
import products from './products'
import caseStudies from './case-studies'
import marketingPages from './marketingPages'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'
import defaultNavItem from './common/defaultNavItem'
import contentRich from './common/contentRich'
import defaultNavItemNoSub from './common/defaultNavItemNoSub'
import defaultNavItemSocial from './common/defaultNavItemSocial'
import modularTextBlock from './common/modularTextBlock'
import modularEmbedBlock from './common/modularEmbedBlock'
import modularImageBlock from './common/modularImageBlock'
import modularQuoteBlock from './common/modularQuoteBlock'
import modularMarketingHeroBlock from './common/modularMarketingHeroBlock'
import modularMarketingTextImageSplitBlock from './common/modularMarketingTextImageSplitBlock'
import modularMarketingTextOverImageBlock from './common/modularMarketingTextOverImageBlock'
import modularMarketingCondensedCtaBlock from './common/modularMarketingCondensedCtaBlock'
import modularMarketingCareersBlock from './common/modularMarketingCareersBlock'
import modularMarketingCaseStudiesBlock from './common/modularMarketingCaseStudiesBlock'
import modularMarketingNewsFeedBlock from './common/modularMarketingNewsFeedBlock'
import modularMarketingGamesFeedBlock from './common/modularMarketingGamesFeedBlock'
import modularMarketingPeopleCarouselBlock from './common/modularMarketingPeopleCarouselBlock'
import modularMarketingLongIconListBlock from './common/modularMarketingLongIconListBlock'
import modularMarketingMultipleCtaBlock from './common/modularMarketingMultipleCtaBlock'
import modularMarketingTextIconBlock from './common/modularMarketingTextIconBlock'
import modularMarketingHubspotFormBlock from './common/modularMarketingHubspotFormBlock'
import modularMarketingIconBlock from './common/modularMarketingIconBlock'
import modularMarketingStatListBlock from './common/modularMarketingStatListBlock'
import modularMarketingImageCarouselBlock from './common/modularMarketingImageCarouselBlock'
import singletonEula from './singletonEula'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonGames,
    singletonBlog,
    singletonHomaLab,
    singletonCommunity,
    singletonContact,
    singletonCareers,
    singletonAbout,
    singletonPrivacy,
    singletonTerms,
    singletonSubscriptionTerms,
    singletonEula,
    singletonCookiePolicy,
    singletonFaqs,
    singletonNavigation,
    singletonAdmin,
    blog,
    authors,
    categories,
    contentRich,
    team,
    games,
    products,
    marketingPages,
    caseStudies,
    defaultImage,
    defaultNavItem,
    defaultNavItemNoSub,
    defaultNavItemSocial,
    modularTextBlock,
    modularEmbedBlock,
    modularImageBlock,
    modularQuoteBlock,
    modularMarketingHeroBlock,
    modularMarketingTextImageSplitBlock,
    modularMarketingTextOverImageBlock,
    modularMarketingCondensedCtaBlock,
    modularMarketingCareersBlock,
    modularMarketingCaseStudiesBlock,
    modularMarketingNewsFeedBlock,
    modularMarketingGamesFeedBlock,
    modularMarketingPeopleCarouselBlock,
    modularMarketingLongIconListBlock,
    modularMarketingMultipleCtaBlock,
    modularMarketingTextIconBlock,
    modularMarketingHubspotFormBlock,
    modularMarketingIconBlock,
    modularMarketingStatListBlock,
    modularMarketingImageCarouselBlock,
    seo
  ]),
})
