import {RECEIVE_HEADCATES,
         RECEIVE_FOCUSLIST,
         RECEIVE_TAGLIST,
         RECEIVE_NEWITEMLIST,
         RECEIVE_POPULARITEMLIST,
         RECEIVE_FLASHSALEINDEXVO,
         RECEIVE_TOPICLIST,
         RECEIVE_TCATELIST,
         RECEIVE_BANNER,
         RECEIVE_COLUMN,
         RECEIVE_RECOMMEND,
         RECEIVE_TENFIFTEEN,
         RECEIVE_YXLOOK,
         RECEIVE_CATEGORYDATA,
         RECEIVE_REQFINDMORE


        }from'./mutation-types'
import {reqHeadCateList,
         reqFocusList,
         reqTagList,
        reqNewItemList,
        reqPopularItemList,
        reqFlashSaleIndexVO,
        reqtTopicList,
        reqTcateList,
        reqBanner,

        reqColumn,
        reqRecommend,
        reqTenfifteen,
        reqYxLook,
        reqCategoryData,
        reqFindMore


}  from '../api'
export default {
  async getHeadCateList({commit},cb) {
    const result = await reqHeadCateList()
    if (result.code === 0) {
      const headCates = result.data
      commit(RECEIVE_HEADCATES, {headCates})
    }
    cb()
  },
  async getTagList({commit}) {
    const result = await reqTagList()
    if (result.code === 0) {
      const tagList = result.data
      commit(RECEIVE_TAGLIST, {tagList})
    }
  },
  async getFocusList({commit},cb) {
    const result = await reqFocusList()
    if (result.code === 0) {
      const focusList = result.data
      commit(RECEIVE_FOCUSLIST, {focusList})
    }
    cb()
  },
  async getNewItemList({commit}) {
    const result = await reqNewItemList()
    if (result.code === 0) {
      const newItemList = result.data
      commit(RECEIVE_NEWITEMLIST, {newItemList})
    }
  },
  async getPopularItemList({commit}) {
    const result = await reqPopularItemList()
    if (result.code === 0) {
      const popularItemList = result.data
      commit(RECEIVE_POPULARITEMLIST, {popularItemList})
    }

  },
  async getFlashSaleIndexVO({commit}){
    const result = await reqFlashSaleIndexVO()
    if (result.code === 0) {
      const flashSaleIndexVO = result.data
      commit(RECEIVE_FLASHSALEINDEXVO, {flashSaleIndexVO})
    }
  },
//  专题精选
  async getTopicList({commit}) {
    const result = await reqtTopicList()
    if (result.code === 0) {
      const topicList = result.data
      commit(RECEIVE_TOPICLIST, {topicList})
    }
  },
  //居家
  async getTcateList({commit}) {
    const result = await reqTcateList()
    if (result.code === 0) {
      const tcateList = result.data
      commit(RECEIVE_TCATELIST, {tcateList})
    }
  },
  //识物轮播
  async getBanner({commit},cb) {
    const result = await reqBanner()
    if (result.code === 0) {
      const banner = result.data
      commit(RECEIVE_BANNER, {banner})
    }
    cb()
  },
  //严选推荐
  async getColumn({commit},cb) {
    const result = await reqColumn()
    if (result.code === 0) {
      const column = result.data
      commit(RECEIVE_COLUMN, {column})
    }
    cb()
  },
//为你推荐
  async getRecommend({commit}) {
    const result = await reqRecommend()
    if (result.code === 0) {
      const recommend = result.data
      commit(RECEIVE_RECOMMEND, {recommend})
    }

  },
  //十点一刻
  async getTenfifteen({commit},cb) {
    const result = await reqTenfifteen()
    if (result.code === 0) {
      const tenfifteen = result.data
      commit(RECEIVE_TENFIFTEEN, {tenfifteen})
    }
    cb()
  },
  //严选look
  async getYxLook({commit}) {
    const result = await reqYxLook()
    if (result.code === 0) {
      const yxLook = result.data
      commit(RECEIVE_YXLOOK, {yxLook})
    }
  },
  //分类
  async getCategoryData({commit}) {
    const result = await reqCategoryData()
    if (result.code === 0) {
      const categoryData = result.data
      commit(RECEIVE_CATEGORYDATA, {categoryData})
    }
  },
  //更多推荐
  async getFindMore({commit}) {
    const result = await reqFindMore()
    if (result.code === 0) {
      const findMore = result.data
      commit(RECEIVE_REQFINDMORE, {findMore})
    }
  }
}
