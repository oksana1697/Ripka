// @flow
import { compose, join, keys, split, map, concat, prop, identity, __, filter, ifElse, defaultTo, not, always, equals, type, trim, } from "ramda"

const ELEMENT_SEPARATOR = "__",
  MODIFIER_SEPARATOR = "_"

export const selector = compose(join(""), map(c => "." + c), split(" "))

const getBase = ({ b, e }) => (e ? b + ELEMENT_SEPARATOR + e : b)

const getBEMPAth = BEM =>
  compose(
    trim,
    concat(getBase(BEM) + " "),
    join(" "),
    map(concat(getBase(BEM) + MODIFIER_SEPARATOR)),
    prop("m"),
  )(BEM)

export default b => (elementName, modifiers) => {
  modifiers = ifElse(
    //prettier-ignore
    compose(not, equals("String"), type),
    defaultTo({}),
    always(modifiers),
  )(elementName)

  return getBEMPAth({
    b,
    e: typeof elementName === "string" ? elementName : null,
    m: ifElse(
      //prettier-ignore
      Array.isArray,
      identity,
      compose(filter(prop(__, modifiers)), keys),
    )(modifiers),
  })
}
