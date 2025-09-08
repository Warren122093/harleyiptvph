// --- Group definitions ---
const channelGroups = {
  "TFC": [
    "pbb_ce_live_tfc_","tfc_asia","tfc_europe","tfc_canada","cinemo_tfc","cinemaone_tfc","teleradyo_tfc_","anc_hd_tfc_","myx_tfc"
  ],
  "GMA": [
    "gma_pinoy_tv","gma_pinoy_tv_tfc_","gma_life_tv","gma_news_tv"
  ],
  "Sports": [
    "one_sports_cig_","one_sports_plus","uaap_varsity","pba_rush_hd","nba_tv_ph_cig_","nba_tv_ph_24_7","premier_sports_cig_","premier_sports_2_cig_","spotv_hd_cig_","spotv_2_hd_cig_"
  ],
  "News": [
    "anc_hd_tfc_","teleradyo_tfc_","cnn_international_cig_","bbc_news_cig_","channel_news_asia_cig_","bloomberg","abc_australia_cig_","france24_cig_","rptv_cig_"
  ],
  "General": [
    "a2z_cig_","ibc_cig_","ptv4_cig_","knowledge_channels","knowledge_channels_cig_","deped_tv","tvup","media_pilipinas_tv"
  ],
  "Entertainment": [
    "cinemaone_tfc","cinemo_tfc","myx_philippines","rock_action","rock_entertaiment","lotus_macau_cig_","sari_sari","buko_tv","tvn_premium_hd"
  ],
  "Cartoon": [
    "cartoon_network"
  ],
  "All Channels": [] // Will be filled automatically
};

// Your channels object (full, as in your message)
const channels = {
  pbb_ce_live_tfc_: {
    name: "PBB CE LIVE (TFC)",
    url: "https://abslive.akamaized.net/dash/live/2112806/pbbmain/manifest.mpd",
    keys: {
      "8438e8495659425585a09749cd6bc39a": "9d92b12db092fe6bdf2207ef7a2a9e65"
    }
  },
  tfc_asia: {
    name: "TFC ASIA",
    url: "https://d1facupi3cod3q.cloudfront.net/out/v1/e3633f8591e248b0af1af15a474bfa4a/index.mpd",
    keys: {
      "9568cc84e1d944f38eac304517eab6fd": "f12142af8f39b3bab79d3679d3665ebe"
    }
  },
  tfc_europe: {
    name: "TFC EUROPE",
    url: "https://d123wz0csfw11u.cloudfront.net/out/v1/6e2906534002432984f73742ef2bcbfe/index.mpd",
    keys: {
      "457c50351e2a4c42a5c34cfb5c0b0682": "03a2754079e082f7dec48ad362e3899e"
    }
  },
  tfc_canada: {
    name: "TFC CANADA",
    url: "https://du44jtt5g7upx.cloudfront.net/out/v1/a3b708325c1d43dc9549c262526a6945/index.mpd",
    keys: {
      "9c700e42ffc64d9b82d94cf57a2302fa": "44d038e1fdcaefb3e75ffb4e42537279"
    }
  },
  cinemo_tfc: {
    name: "CINEMO TFC",
    url: "https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd",
    keys: {
      "aa8aebe35ccc4541b7ce6292efcb1bfb": "aab1df109d22fc5d7e3ec121ddf24e5f"
    }
  },
  cinemaone_tfc: {
    name: "CINEMAONE TFC",
    url: "https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd",
    keys: {
      "58d0e56991194043b8fb82feb4db7276": "d68f41b59649676788889e19fb10d22c"
    }
  },
  teleradyo_tfc_: {
    name: "TELERADYO (TFC)",
    url: "https://d14c00opfjb50c.cloudfront.net/out/v1/0fa4eb67579d41cca4ed146c93aa855f/index.mpd",
    keys: {
      "47c093e0c9fd4f80839a0337da3dd876": "50547394045b3d047dc7d92f57b5fb33"
    }
  },
  anc_hd_tfc_: {
    name: "ANC HD (TFC)",
    url: "https://d3cjss68xc4sia.cloudfront.net/out/v1/89ea8db23cb24a91bfa5d0795f8d759e/index.mpd",
    keys: {
      "4bbdc78024a54662854b412d01fafa16": "6039ec9b213aca913821677a28bd78ae"
    }
  },
  myx_philippines: {
    name: "MYX PHILIPPINES",
    url: "http://143.44.136.111:6910/001/2/ch00000090990000001252/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    keys: {
      "74": "9443"
    }
  },
  myx_tfc: {
    name: "MYX TFC",
    url: "https://d24xfhmhdb6r0q.cloudfront.net/out/v1/e897a7b6414a46019818ee9f2c081c4f/index.mpd",
    keys: {
      "f40a52a3ac9b4702bdd5b735d910fd2f": "5ce1bc7f06b494c276252b4d13c90e51"
    }
  },
  mor_entertainment: {
    name: "MOR ENTERTAINMENT",
    url: "https://abslive.akamaized.net/dash/live/2028025/mor/manifest.mpd",
    keys: {
      "f1d76704a9f84ce28e7e3d154c7dc5b1": "36d98c5b0aad47b256629e57a651e3d8"
    }
  },
  knowledge_channels: {
    name: "KNOWLEDGE CHANNELS",
    url: "https://abslive.akamaized.net/dash/live/2028189/kc/manifest.mpd",
    keys: {
      "141288d93b0f4f89a3f614a365671411": "ccd2e8162c5fe3f6d5207fb941c09686"
    }
  },
  gma_pinoy_tv: {
    name: "GMA PINOY TV",
    url: "https://amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono-dzsx9.amagi.tv/index.mpd",
    keys: {
      "c95ed4c44b0b4f7fa1c6ebbbbaab21a1": "47635b8e885e19f2ccbdff078c207058"
    }
  },
  gma_pinoy_tv_tfc_: {
    name: "GMA PINOY TV (TFC)",
    url: "https://absp-live.akamaized.net/dash/live/2099522/gmapt/manifest.mpd",
    keys: {
      "4b66176b0f0748e38c6db27263f6f1a1": "12ca5ae7cf4772736945689727961aec"
    }
  },
  gma_life_tv: {
    name: "GMA LIFE TV",
    url: "https://absp-live.akamaized.net/dash/live/2099524/gmalf/manifest.mpd",
    keys: {
      "369bcd591a7e42cea6a829879962ee77": "7c0548d4ea14676297c0a36ea0e06301"
    }
  },
  gma_news_tv: {
    name: "GMA NEWS TV",
    url: "https://absp-live.akamaized.net/dash/live/2099526/gmanw/manifest.mpd",
    keys: {
      "f1d76704a9f84ce28e7e3d154c7dc5b1": "36d98c5b0aad47b256629e57a651e3d8"
    }
  },
  a2z_cig_: {
    name: "A2Z (CIG)",
    url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/cg_a2z.mpd",
    keys: {
      "f703e4c8ec9041eeb5028ab4248fa094": "c22f2162e176eee6273a5d0b68d19530"
    }
  },
  ibc_cig_: {
    name: "IBC (CIG)",
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd",
    keys: {
      "04e292bc99bd4ccba89e778651914254": "ff0a62bdf8920ce453fe680330b563a5"
    }
  },
  ptv4_cig_: {
    name: "PTV4 (CIG)",
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
    keys: {
      "71a130a851b9484bb47141c8966fb4a3": "ad1f003b4f0b31b75ea4593844435600"
    }
  },
  knowledge_channels_cig_: {
    name: "KNOWLEDGE CHANNELS (CIG)",
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd",
    keys: {
      "0f856fa0412b11edb8780242ac120002": "783374273ef97ad3bc992c1d63e091e7"
    }
  },
  deped_tv: {
    name: "DEPED TV",
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd",
    keys: {
      "0f853706412b11edb8780242ac120002": "2157d6529d80a760f60a8b5350dbc4df"
    }
  },
  tvup: {
    name: "TVUP",
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd",
    keys: {
      "83e813ccd4ca4837afd611037af02f63": "a97c515dbcb5dcbc432bbd09d15afd41"
    }
  },
  one_ph_cig_: {
    name: "ONE PH (CIG)",
    url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/oneph_sd.mpd",
    keys: {
      "92834ab4a7e1499b90886c5d49220e46": "a7108d9a6cfcc1b7939eb111daf09ab3"
    }
  },
  viva_cinema_cig_: {
    name: "VIVA CINEMA (CIG)",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/viva_sd.mpd",
    keys: {
      "07aa813bf2c147748046edd930f7736e": "3bd6688b8b44e96201e753224adfc8fb"
    }
  },
  pbo_cig_: {
    name: "PBO (CIG)",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/pbo_sd.mpd",
    keys: {
      "dcbdaaa6662d4188bdf97f9f0ca5e830": "31e752b441bd2972f2b98a4b1bc1c7a1"
    }
  },
  thrill_cig_: {
    name: "THRILL (CIG)",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd",
    keys: {
      "928114ffb2394d14b5585258f70ed183": "a82edc340bc73447bac16cdfed0a4c62"
    }
  },
  rock_action: {
    name: "ROCK ACTION",
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd",
    keys: {
      "0f852fb8412b11edb8780242ac120002": "4cbc004d8c444f9f996db42059ce8178"
    }
  },
  rock_entertaiment: {
    name: "ROCK ENTERTAIMENT",
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd",
    keys: {
      "e4ee0cf8ca9746f99af402ca6eed8dc7": "be2a096403346bc1d0bb0f812822bb62"
    }
  },
  lotus_macau_cig_: {
    name: "LOTUS MACAU (CIG)",
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd",
    keys: {
      "60dc692e64ea443a8fb5ac186c865a9b": "01bdbe22d59b2a4504b53adc2f606cc1"
    }
  },
  sari_sari: {
    name: "SARI-SARI",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
    keys: {
      "0a7ab3612f434335aa6e895016d8cd2d": "b21654621230ae21714a5cab52daeb9d"
    }
  },
  buko_tv: {
    name: "BUKO TV",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
    keys: {
      "d273c085f2ab4a248e7bfc375229007d": "7932354c3a84f7fc1b80efa6bcea0615"
    }
  },
  tvn_premium_hd: {
    name: "TVN PREMIUM HD",
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd",
    keys: {
      "e1bde543e8a140b38d3f84ace746553e": "b712c4ec307300043333a6899a402c10"
    }
  },
  axn_channel_cig_: {
    name: "AXN CHANNEL (CIG)",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd",
    keys: {
      "fd5d928f5d974ca4983f6e9295dfe410": "3aaa001ddc142fedbb9d5557be43792f"
    }
  },
  lifetime_cig_: {
    name: "LIFETIME (CIG)",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd",
    keys: {
      "cf861d26e7834166807c324d57df5119": "64a81e30f6e5b7547e3516bbf8c647d0"
    }
  },
  nba_tv_ph_cig_: {
    name: "NBA TV PH (CIG)",
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd",
    keys: {
      "c5e51f41ceac48709d0bdcd9c13a4d88": "20b91609967e472c27040716ef6a8b9a"
    }
  },
  rptv_cig_: {
    name: "RPTV (CIG)",
    url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
    keys: {
      "1917f4caf2364e6d9b1507326a85ead6": "a1340a251a5aa63a9b0ea5d9d7f67595"
    }
  },
  pba_rush_hd: {
    name: "PBA RUSH HD",
    url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd",
    keys: {
      "76dc29dd87a244aeab9e8b7c5da1e5f3": "95b2f2ffd4e14073620506213b62ac82"
    }
  },
  one_sports_cig_: {
    name: "ONE SPORTS (CIG)",
    url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/cg_onesports_hd.mpd",
    keys: {
      "53c3bf2eba574f639aa21f2d4409ff11": "3de28411cf08a64ea935b9578f6d0edd"
    }
  },
  one_sports_plus: {
    name: "ONE SPORTS PLUS",
    url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd",
    keys: {
      "322d06e9326f4753a7ec0908030c13d8": "1e3e0ca32d421fbfec86feced0efefda"
    }
  },
  uaap_varsity: {
    name: "UAAP VARSITY",
    url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",
    keys: {
      "95588338ee37423e99358a6d431324b9": "6e0f50a12f36599a55073868f814e81e"
    }
  },
  media_pilipinas_tv: {
    name: "MEDIA PILIPINAS TV",
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd",
    keys: {
      "6aab8f40536f4ea98e7c97b8f3aa7d4e": "139aa5a55ade471faaddacc4f4de8807"
    }
  },
  spotv_hd_cig_: {
    name: "SPOTV HD (CIG)",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd",
    keys: {
      "ec7ee27d83764e4b845c48cca31c8eef": "9c0e4191203fccb0fde34ee29999129e"
    }
  },
  spotv_2_hd_cig_: {
    name: "SPOTV 2 HD (CIG)",
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd",
    keys: {
      "7eea72d6075245a99ee3255603d58853": "6848ef60575579bf4d415db1032153ed"
    }
  },
  premier_sports_cig_: {
    name: "PREMIER SPORTS (CIG)",
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd",
    keys: {
      "fc19c98cb9504a0fb78b22fea0a4b814": "ea683112a96d4ae6c32d4ea13923e8c7"
    }
  },
  premier_sports_2_cig_: {
    name: "PREMIER SPORTS 2 (CIG)",
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd",
    keys: {
      "59454adb530b4e0784eae62735f9d850": "61100d0b8c4dd13e4eb8b4851ba192cc"
    }
  },
  bbc_lifestyle: {
    name: "BBC LIFESTYLE",
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd",
    keys: {
      "34880f56627c11ee8c990242ac120002": "c23677c829bb244b79a3dc09ffd88ca0"
    }
  },
  bbc_earth: {
    name: "BBC EARTH",
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd",
    keys: {
      "34ce95b60c424e169619816c5181aded": "0e2a2117d705613542618f58bf26fc8e"
    }
  },
  bbc_news_cig_: {
    name: "BBC NEWS (CIG)",
    url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd",
    keys: {
      "f59650be475e4c34a844d4e2062f71f3": "119639e849ddee96c4cec2f2b6b09b40"
    }
  },
  history_channel_cig_: {
    name: "HISTORY CHANNEL (CIG)",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",
    keys: {
      "a7724b7ca2604c33bb2e963a0319968a": "6f97e3e2eb2bade626e0281ec01d3675"
    }
  },
  discovery_channel_cig_: {
    name: "DISCOVERY CHANNEL (CIG)",
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd",
    keys: {
      "d9ac48f5131641a789328257e778ad3a": "b6e67c37239901980c6e37e0607ceee6"
    }
  },
  asian_food_network_cig_: {
    name: "ASIAN FOOD NETWORK (CIG)",
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd",
    keys: {
      "1619db30b9ed42019abb760a0a3b5e7f": "5921e47fb290ae263291b851c0b4b6e4"
    }
  },
  food_network: {
    name: "FOOD NETWORK",
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd",
    keys: {
      "b7299ea0af8945479cd2f287ee7d530e": "b8ae7679cf18e7261303313b18ba7a14"
    }
  },
  cgtn_channel_cig_: {
    name: "CGTN CHANNEL (CIG)",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_cgtn.mpd",
    keys: {
      "0f854ee4412b11edb8780242ac120002": "9f2c82a74e727deadbda389e18798d55"
    }
  },
  channel_news_asia_cig_: {
    name: "CHANNEL NEWS ASIA (CIG)",
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd",
    keys: {
      "b259df9987364dd3b778aa5d42cb9acd": "753e3dba96ab467e468269e7e33fb813"
    }
  },
  hgtv_cig_: {
    name: "HGTV (CIG)",
    url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd",
    keys: {
      "f0e3ab943318471abc8b47027f384f5a": "13802a79b19cc3485d2257165a7ef62a"
    }
  },
  arirang_cig_: {
    name: "ARIRANG (CIG)",
    url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd",
    keys: {
      "13815d0fa026441ea7662b0c9de00bcf": "2d99a55743677c3879a068dd9c92f824"
    }
  },
  nhk_japan: {
    name: "NHK JAPAN",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd",
    keys: {
      "3d6e9d4de7d7449aadd846b7a684e564": "0800fff80980f47f7ac6bc60b361b0cf"
    }
  },
  animal_planet_cig_: {
    name: "ANIMAL PLANET (CIG)",
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",
    keys: {
      "436b69f987924fcbbc06d40a69c2799a": "c63d5b0d7e52335b61aeba4f6537d54d"
    }
  },
  trvl_channel: {
    name: "TRVL CHANNEL",
    url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",
    keys: {
      "f3047fc13d454dacb6db4207ee79d3d3": "bdbd38748f51fc26932e96c9a2020839"
    }
  },
  crime_investigation_cig_: {
    name: "CRIME INVESTIGATION (CIG)",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd",
    keys: {
      "21e2843b561c4248b8ea487986a16d33": "db6bb638ccdfc1ad1a3e98d728486801"
    }
  },
  bloomberg: {
    name: "BLOOMBERG",
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd",
    keys: {
      "ef7d9dcfb99b406cb79fb9f675cba426": "b24094f6ca136af25600e44df5987af4"
    }
  },
  kbs_world_cig_: {
    name: "KBS WORLD (CIG)",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd",
    keys: {
      "22ff2347107e4871aa423bea9c2bd363": "c6e7ba2f48b3a3b8269e8bc360e60404"
    }
  },
  kix_cig_: {
    name: "KIX (CIG)",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd",
    keys: {
      "a8d5712967cd495ca80fdc425bc61d6b": "f248c29525ed4c40cc39baeee9634735"
    }
  },
  tech_storm_cig_: {
    name: "TECH STORM (CIG)",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tech_storm.mpd",
    keys: {
      "5675d85ce6754ba6aa8f6acc4660f76f": "140bfb365cf143c349f68699238a610c"
    }
  },
  fashion_tv_cig_: {
    name: "FASHION TV (CIG)",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd",
    keys: {
      "971ebbe2d887476398e97c37e0c5c591": "472aa631b1e671070a4bf198f43da0c7"
    }
  },
  warner_tv_cig_: {
    name: "WARNER TV (CIG)",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd",
    keys: {
      "4503cf86bca3494ab95a77ed913619a0": "afc9c8f627fb3fb255dee8e3b0fe1d71"
    }
  },
  cnn_international_cig_: {
    name: "CNN INTERNATIONAL (CIG)",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd",
    keys: {
      "900c43f0e02742dd854148b7a75abbec": "da315cca7f2902b4de23199718ed7e90"
    }
  },
  abc_australia_cig_: {
    name: "ABC AUSTRALIA (CIG)",
    url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",
    keys: {
      "389497f9f8584a57b234e27e430e04b7": "3b85594c7f88604adf004e45c03511c0"
    }
  },
  tv5_monde_cig_: {
    name: "TV5 MONDE (CIG)",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd",
    keys: {
      "fba5a720b4a541b286552899ba86e38b": "f63fa50423148bfcbaa58c91dfcffd0e"
    }
  },
  france24_cig_: {
    name: "FRANCE24 (CIG)",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_france24.mpd",
    keys: {
      "257f9fdeb39d41bdb226c2ae1fbdaeb6": "e80ead0f4f9d6038ab34f332713ceaa5"
    }
  },
  nba_tv_ph_24_7: {
    name: "NBA TV PH 24/7",
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd",
    keys: {
      "f36eed9e95f140fabbc88a08abbeafff": "0125600d0eb13359c28bdab4a2ebe75a"
    }
  },
  pl_sdi7: {
    name: "PL - SDI7",
    url: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/smart_sdi7.mpd",
    keys: {
      "0f873c2c412b11edb8780242ac120002": "9c1f27adc2a2dd23ce415e8563c07af6"
    }
  },
  pl_sdi8: {
    name: "PL - SDI8",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/smart_sdi8.mpd",
    keys: {
      "50ea84d79773464192071d6fc058cba1": "0b1642e0a661a780e74835fe765e1319"
    }
  },
  pl_sdi9: {
    name: "PL - SDI9",
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/smart_sdi9.mpd",
    keys: {
      "d2a24c65b3734565af71a1c3a9bbbf69": "552351880bd0eb97f85c8aeccd88ffa5"
    }
  },
  ppv_sdi97: {
    name: "PPV - SDI97",
    url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/ppvsd197.mpd",
    keys: {
      "8ad18258a9814d60a67efc6ec9fb3cbd": "7ce6edd4bcf1510583c7739ac8f08e79"
    }
  },
  pilipinas_live_01: {
    name: "PILIPINAS LIVE #01",
    url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/pl_sdi1.mpd",
    keys: {
      "a913faeecaac4813a55240bea0c68858": "05b7d7eaba8d6410dbe234336d9b235a"
    }
  },
  pilipinas_live_02: {
    name: "PILIPINAS LIVE #02",
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_sdi2.mpd",
    keys: {
      "2f3056cac18d4e31a59de39767042b03": "83728946b898141ae411572f9f5fce0d"
    }
  },
  pilipinas_live_03: {
    name: "PILIPINAS LIVE #03",
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/pl_sdi3.mpd",
    keys: {
      "0c16d5962a22494db502b3453f891208": "acaed175b981b34ae9b5cb0130506854"
    }
  },
  pilipinas_live_04: {
    name: "PILIPINAS LIVE #04",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/pl_sdi4.mpd",
    keys: {
      "c3050cba95c945418efa3aedbc69cff7": "988e7fade0828273472e24545d0cfa4c"
    }
  },
  pilipinas_live_05: {
    name: "PILIPINAS LIVE #05",
    url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/pl_sdi5.mpd",
    keys: {
      "eecc6d7ac3df439fb2b73fb38007cb82": "826c341a6fef4518cefd27ec85e8b274"
    }
  },
  pilipinas_live_06: {
    name: "PILIPINAS LIVE #06",
    url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/pl_sdi6.mpd",
    keys: {
      "02d5f086706e407e9343c040ac7fb5b8": "9d7e088bf7fffc9297ab3a02f0ce9a72"
    }
  },
  pilipinas_live_07: {
    name: "PILIPINAS LIVE #07",
    url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pl_sdi7.mpd",
    keys: {
      "40bed7f7948e4e5792982cf5b7ee4d78": "1fbfd2e3be51aae857f2f24306e5fc41"
    }
  },
  pilipinas_live_08: {
    name: "PILIPINAS LIVE #08",
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/pl_sdi8.mpd",
    keys: {
      "5a8dbf3b9c2c43079a40fb5d0068f9ef": "1778ac6e22527ee2efd6886d8d509c2d"
    }
  },
  pilipinas_live_09: {
    name: "PILIPINAS LIVE #09",
    url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/pl_sdi9.mpd",
    keys: {
      "1c7b9a2af9ad4076b155f06269b6adc2": "ed6a8b11738cd27c0bee2d9e3fee178a"
    }
  },
  cartoon_network: {
    name: "Cartoon Network",
    url: "https://cdn4.skygo.mn/live/disk1/Cartoon_Network/HLSv3-FTA/Cartoon_Network.m3u8"
    // No DRM keys required for this .m3u8 link
  }
};
channelGroups["All Channels"] = Object.keys(channels);

// Mobile+Desktop support
const groupDropdowns = [document.getElementById('groupDropdown'), document.getElementById('groupDropdownDesktop')].filter(Boolean);
const channelSearches = [document.getElementById('channelSearch'), document.getElementById('channelSearchDesktop')].filter(Boolean);
const channelLists = [document.getElementById('channelList'), document.getElementById('channelListDesktop')].filter(Boolean);
const video = document.getElementById('video');

// Populate group dropdowns
function populateGroupDropdowns() {
  groupDropdowns.forEach(dropdown => {
    dropdown.innerHTML = '';
    for (const group in channelGroups) {
      const opt = document.createElement('option');
      opt.value = group;
      opt.textContent = group;
      dropdown.appendChild(opt);
    }
    dropdown.value = "All Channels";
  });
}
populateGroupDropdowns();

// Render ListView Items (filtered)
function renderChannelLists(group, filter = "") {
  channelLists.forEach(list => {
    list.innerHTML = '';
    const keys = channelGroups[group] || [];
    for (const key of keys) {
      const channel = channels[key];
      if (!channel) continue;
      if (!filter || channel.name.toLowerCase().includes(filter.toLowerCase())) {
        const item = document.createElement('li');
        item.className = 'list-group-item channel-item';
        item.style.cursor = 'pointer';
        item.dataset.key = key;
        item.textContent = channel.name;
        list.appendChild(item);
      }
    }
  });
}

// Channel playback logic
let player = null;
let hls = null;
function getStreamType(url) {
  if (url.endsWith('.mpd')) return 'dash';
  if (url.endsWith('.m3u8')) return 'hls';
  return null;
}
async function loadChannel(channelKey) {
  const channel = channels[channelKey];
  if (!channel) return;
  if (player) { await player.destroy(); player = null; }
  if (hls) { hls.destroy(); hls = null; }
  const type = getStreamType(channel.url);
  if (type === 'dash') {
    shaka.polyfill.installAll();
    player = new shaka.Player(video);
    player.addEventListener('error', e => { console.error('Error code', e.detail.code, 'object', e.detail); });
    const drmConfig = {};
    if (channel.keys) drmConfig.clearKeys = channel.keys;
    if (channel.license && channel.license.type && channel.license.url) {
      drmConfig.servers = { [channel.license.type]: channel.license.url };
    }
    player.configure({ drm: drmConfig });
    try {
      await player.load(channel.url);
      video.play();
      document.querySelector('.player-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
      console.error("Failed to load channel:", error);
    }
  } else if (type === 'hls') {
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = channel.url;
      video.play();
      document.querySelector('.player-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (window.Hls) {
      hls = new Hls();
      hls.loadSource(channel.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
        document.querySelector('.player-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      hls.on(Hls.Events.ERROR, function(event, data) {
        console.error('HLS.js error:', data);
      });
    } else {
      video.src = channel.url;
      video.play();
      document.querySelector('.player-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  } else {
    console.error("Unknown stream type:", channel.url);
  }
}

// Sync group dropdowns and search inputs
groupDropdowns.forEach((dropdown, i) => {
  dropdown.addEventListener('change', () => {
    groupDropdowns.forEach(d => d.value = dropdown.value);
    channelSearches.forEach(s => s.value = "");
    renderChannelLists(dropdown.value, "");
  });
});
channelSearches.forEach((search, i) => {
  search.addEventListener('input', () => {
    renderChannelLists(groupDropdowns[0].value, search.value.trim());
  });
});

// Handle channel click (sync highlight on both lists)
channelLists.forEach(list => {
  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('channel-item')) {
      channelLists.forEach(l => l.querySelectorAll('.active').forEach(el => el.classList.remove('active')));
      channelLists.forEach(l => {
        const match = l.querySelector(`.channel-item[data-key="${e.target.dataset.key}"]`);
        if (match) match.classList.add('active');
      });
      loadChannel(e.target.dataset.key);
      // Optionally close nav drawer on mobile
      const navDrawer = document.getElementById('navDrawer');
      if (window.innerWidth < 992 && navDrawer && navDrawer.classList.contains('show')) {
        const offcanvas = bootstrap.Offcanvas.getInstance(navDrawer);
        if (offcanvas) offcanvas.hide();
      }
    }
  });
});

// Initial load
window.addEventListener('DOMContentLoaded', () => {
  populateGroupDropdowns();
  renderChannelLists("All Channels");
  // Optionally select and play a default channel:
  const defaultKey = "gma_pinoy_tv";
  channelLists.forEach(list => {
    const defaultItem = list.querySelector(`.channel-item[data-key="${defaultKey}"]`);
    if (defaultItem) defaultItem.classList.add('active');
  });
  loadChannel(defaultKey);
});