#pragma clang diagnostic ignored "-Wunused-variable"

#include <metal_stdlib>
#include <simd/simd.h>
#include <metal_atomic>

using namespace metal;

struct type_StructuredBuffer_v4float
{
    float4 _m0[1];
};

struct type_Globals
{
    uint2 ShadowTileListGroupSize;
};

constant float3 _70 = {};

struct main0_out
{
    float4 out_var_SV_Target0 [[color(0)]];
};

struct main0_in
{
    uint in_var_TEXCOORD0 [[user(locn0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant uint* spvBufferSizeConstants [[buffer(25)]], const device type_StructuredBuffer_v4float& CulledObjectBoxBounds [[buffer(0)]], constant type_Globals& _Globals [[buffer(1)]], texture2d<uint> RWShadowTileNumCulledObjects [[texture(0)]], device atomic_uint* RWShadowTileNumCulledObjects_atomic [[buffer(2)]], float4 gl_FragCoord [[position]])
{
    main0_out out = {};
    constant uint& CulledObjectBoxBoundsBufferSize = spvBufferSizeConstants[0];
    uint2 _77 = uint2(gl_FragCoord.xy);
    uint _78 = _77.y;
    uint _83 = _77.x;
    float2 _91 = float2(float(_83), float((_Globals.ShadowTileListGroupSize.y - 1u) - _78));
    float2 _93 = float2(_Globals.ShadowTileListGroupSize);
    float2 _96 = ((_91 / _93) * float2(2.0)) - float2(1.0);
    float2 _100 = (((_91 + float2(1.0)) / _93) * float2(2.0)) - float2(1.0);
    float3 _101 = float3(_100.x, _100.y, _70.z);
    _101.z = 1.0;
    uint _103 = in.in_var_TEXCOORD0 * 5u;
    float3 _106 = CulledObjectBoxBounds._m0[uint(clamp(int(_103), int(0u), int(min((((CulledObjectBoxBoundsBufferSize - 0) / 16) - 1u), 2147483647u))))].xyz;
    uint _310 = uint(clamp(int(_103 + 1u), int(0u), int(min((((CulledObjectBoxBoundsBufferSize - 0) / 16) - 1u), 2147483647u))));
    float4 _109 = CulledObjectBoxBounds._m0[_310];
    if (all(_109.xy > _96.xy) && all(_106 < _101))
    {
        float3 _121 = float3(0.5) * (_106 + _109.xyz);
        float _122 = _96.x;
        float _123 = _96.y;
        float _126 = _100.x;
        float _129 = _100.y;
        float3 _145 = CulledObjectBoxBounds._m0[uint(clamp(int(_103 + 2u), int(0u), int(min((((CulledObjectBoxBoundsBufferSize - 0) / 16) - 1u), 2147483647u))))].xyz;
        float3 _149 = CulledObjectBoxBounds._m0[uint(clamp(int(_103 + 3u), int(0u), int(min((((CulledObjectBoxBoundsBufferSize - 0) / 16) - 1u), 2147483647u))))].xyz;
        float3 _153 = CulledObjectBoxBounds._m0[uint(clamp(int(_103 + 4u), int(0u), int(min((((CulledObjectBoxBoundsBufferSize - 0) / 16) - 1u), 2147483647u))))].xyz;
        float3 _166 = float3(_122, _123, -1000.0) - _121;
        float3 _170 = float3(dot(_166, _145), dot(_166, _149), dot(_166, _153));
        float3 _189 = float3(_126, _123, -1000.0) - _121;
        float3 _193 = float3(dot(_189, _145), dot(_189, _149), dot(_189, _153));
        float3 _205 = float3(_122, _129, -1000.0) - _121;
        float3 _209 = float3(dot(_205, _145), dot(_205, _149), dot(_205, _153));
        float3 _221 = float3(_126, _129, -1000.0) - _121;
        float3 _225 = float3(dot(_221, _145), dot(_221, _149), dot(_221, _153));
        float3 _237 = float3(_122, _123, 1.0) - _121;
        float3 _241 = float3(dot(_237, _145), dot(_237, _149), dot(_237, _153));
        float3 _253 = float3(_126, _123, 1.0) - _121;
        float3 _257 = float3(dot(_253, _145), dot(_253, _149), dot(_253, _153));
        float3 _269 = float3(_122, _129, 1.0) - _121;
        float3 _273 = float3(dot(_269, _145), dot(_269, _149), dot(_269, _153));
        float3 _285 = float3(_126, _129, 1.0) - _121;
        float3 _289 = float3(dot(_285, _145), dot(_285, _149), dot(_285, _153));
        if (all(fast::min(fast::min(fast::min(fast::min(fast::min(fast::min(fast::min(fast::min(float3(500000.0), _170), _193), _209), _225), _241), _257), _273), _289) < float3(1.0)) && all(fast::max(fast::max(fast::max(fast::max(fast::max(fast::max(fast::max(fast::max(float3(-500000.0), _170), _193), _209), _225), _241), _257), _273), _289) > float3(-1.0)))
        {
            uint _179 = atomic_fetch_add_explicit((device atomic_uint*)&RWShadowTileNumCulledObjects_atomic[(_78 * _Globals.ShadowTileListGroupSize.x) + _83], 1u, memory_order_relaxed);
        }
    }
    out.out_var_SV_Target0 = float4(0.0);
    return out;
}

