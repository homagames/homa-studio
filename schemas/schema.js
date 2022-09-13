import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonGames from './singletonGames'
import singletonHomaLab from './singletonHomaLab'
import singletonCommunity from './singletonCommunity'
import singletonContact from './singletonContact'
import singletonAbout from './singletonAbout'
import singletonPrivacy from './singletonPrivacy'
import singletonTerms from './singletonTerms'

// Documents
import blog from './blog'
import categories from './categories'
import team from './team'
import products from './products'
import caseStudies from './case-studies'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonGames,
    singletonHomaLab,
    singletonCommunity,
    singletonContact,
    singletonAbout,
    singletonPrivacy,
    singletonTerms,
    blog,
    categories,
    team,
    products,
    caseStudies,
    defaultImage,
    seo
  ]),
})
