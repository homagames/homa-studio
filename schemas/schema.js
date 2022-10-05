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
import singletonAdmin from './singletonAdmin'

// Documents
import blog from './blog'
import categories from './categories'
import authors from './authors'
import team from './team'
import games from './games'
import products from './products'
import caseStudies from './case-studies'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'
import modularTextBlock from './common/modularTextBlock'
import modularImageBlock from './common/modularImageBlock'
import modularQuoteBlock from './common/modularQuoteBlock'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonGames,
    singletonHomaLab,
    singletonCommunity,
    singletonContact,
    singletonCareers,
    singletonAbout,
    singletonPrivacy,
    singletonTerms,
    singletonAdmin,
    blog,
    authors,
    categories,
    team,
    games,
    products,
    caseStudies,
    defaultImage,
    modularTextBlock,
    modularImageBlock,
    modularQuoteBlock,
    seo
  ]),
})
