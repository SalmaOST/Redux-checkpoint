import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from '../actions'
import '../App.css'

const Footer = () => (
    <div >
        <FilterLink  filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Not Done
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Done
        </FilterLink>
    </div>
)

export default Footer